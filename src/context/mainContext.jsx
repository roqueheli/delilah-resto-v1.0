import { useState, createContext, useEffect } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { useLoadScript } from '@react-google-maps/api';

export const MainContext = createContext();

export default function MainProvider({ children }) {
    //Data API's
    const [prods, setProds] = useState([]);
    const [products, setProducts] = useState([]);

    //Others
    const [isLogin, setIsLogin] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const [isProduct, setIsProduct] = useState(false);
    const [isInit, setInit] = useState(false);
    const [isCodeSent, setCodeSent] = useState(false);
    const [isRegister, setRegister] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [product, setProduct] = useState({});
    const [isMyHeader, setIsMyHeader] = useState(false);
    const [isMyData, setIsMyData] = useState(false);
    const [isMyAddresses, setIsMyAddresses] = useState(false);
    const [isAddAddress, setAddAddress] = useState(false);
    const [isAddress, setAddress] = useState(false);
    const [isMyOrders, setIsMyOrders] = useState(false);

    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
      requestOptions: {
          location: { lat: () => -33.5107512, lng: () => -70.6020209 },
          radius: 50 * 1000
      }
    });

    //Shopping Cart object
    const shoppingproducts = [
      {
          id: '62324ade604e8540c8802190',
          count: 1,
          add: [{
              id: '62324960604e8540c8802145',
              count: 1
          }],
          without: [{}]
      },
      {
          id: '62324a13604e8540c8802155',
          count: 2,
          add: [{}],
          without: [{}]
      },
    ]
    
    //Products Object
    useEffect(() => {
      setLoading(false);
      (async () => {
        try {
          const rs = await fetch('http://localhost:3005/app/product');
          const data = await rs.json();
          setProducts(data.product);
          setLoading(true);
        } catch (e) {
          console.log(e);
        }
      })();
    }, []);
    
    //Categories object
    useEffect(() => {
      setLoading(false);
      (async () => {
        try {
          const rs = await fetch('http://localhost:3005/app/category');
          const data = await rs.json();
          setProds(data.category);
          setLoading(true);
        } catch (e) {
          console.log(e);
        }
      })();
    }, []);

    //Price Formatter
    const formatter = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    });

    //Price formatter
    const handlePrice = (prodprice) => {
      const price = formatter.format(prodprice);
      return price;
    }

    //Search constants - Address autocomplete
    const mapContainerStyle = {
      width: '800px',
      height: '410px'
    };
  
    const center = {
      lat: -33.5107512,
      lng: -70.6020209
    };
  
    const options = {
      zoomControl: true,
      disableDefaultUI: true
    }

    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: 'AIzaSyCZzJhvgeFmsSjUVtj71lQafuUV2H7ahXo',
      libraries: ['places']
    });

    return (
        <MainContext.Provider value={ { isLogin, setIsLogin, isCart, setIsCart, isProduct, setIsProduct, isCodeSent, setCodeSent, isRegister, setRegister, isInit, setInit, isLoading, setLoading, prods, setProds, product, setProduct, handlePrice, isMyHeader, setIsMyHeader, isMyData, setIsMyData, isMyAddresses, setIsMyAddresses, isMyOrders, setIsMyOrders, products, setProducts, shoppingproducts, isAddAddress, setAddAddress, mapContainerStyle, center, options, isAddress, setAddress, ready, value, suggestions: { status, data }, setValue, clearSuggestions, getGeocode, getLatLng, isLoaded, loadError } }>
          {children}
        </MainContext.Provider>
    );
}