'use client'
import React,{useState,useEffect,createContext,useContext} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Context = createContext();

export const StateContext=({children})=>{
    const [showCart,setShowCart] = useState(false);
    const [cartItems,setCartItems]= useState([]);
    const [ totalPrice,setTotalPrice] = useState(0);
    const [ totalQuantities,setTotalQuantities] = useState(0);
    const [ qty,setQty] = useState(1);


    let foundProduct;
    let index;

    const incQty=()=>{
        setQty((prevQty)=>prevQty+1)
    }
    const decQty=()=>{
        setQty((prevQty)=>{
            if(prevQty-1<1) return 1;

            return prevQty-1;
        
        
        })
    }

        const onAdd=(product , quantity)=>{
            const checkProductInCart=cartItems.find((item)=>item.slug === product.slug);
            setTotalPrice((prevTotalPrice)=>prevTotalPrice+product.price * quantity);
            setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities+quantity);
            if(!checkProductInCart){
                product.quantity=quantity;
                setCartItems([...cartItems,{...product}])
            }
            
               else{
                const updatedCartItems = cartItems.map((cartProduct)=>{
                    if(cartProduct._id === product._id) return {
                        ...cartProduct,
                        quantity:cartProduct.quantity + quantity
                    }
                })
                
                setCartItems(updatedCartItems);
                
                
               
            }

            
            
            toast.success(`${qty} ${product.name} added to the cart!`)
            
        }
        
        const onRemove=(product)=>{
            foundProduct=cartItems.find((item)=> item.slug === product.slug);
            const newCartItems = cartItems.filter((item)=>item.slug!== product.slug);

            setTotalPrice((prev)=>prev - foundProduct.price * foundProduct.quantity)
            setTotalQuantities((prev)=>prev-foundProduct.quantity)
            setCartItems(newCartItems)
        }



        const toggleCartItemQuantity = (id,value)=>{
        foundProduct=cartItems.find((item)=> item.slug === id);
        index = cartItems.findIndex((product)=>product.slug === id);
        const newCartItems = cartItems.filter((item)=>item.slug!== id);
            if(value === 'inc'){
                
                
                setCartItems([...newCartItems,{...foundProduct,quantity:foundProduct.quantity+=1}]);
                setTotalPrice((prev)=>prev + foundProduct.price)
                setTotalQuantities((prev) => prev+1)
            }else if(value === 'dec'){
                if(foundProduct.quantity > 1){
                
                setCartItems([...newCartItems,{...foundProduct,quantity:foundProduct.quantity-=1}]);
                setTotalPrice((prev)=>prev - foundProduct.price)
                setTotalQuantities((prev) => prev-1)
                }
            }
            }

        

    
    return(
        <Context.Provider
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd,
            setShowCart,
            showCart,
            toggleCartItemQuantity,
            onRemove
        }}>
           <ToastContainer/>
            {children}
            
        </Context.Provider>
    )
    }
export const useStateContext = ()=>useContext(Context);