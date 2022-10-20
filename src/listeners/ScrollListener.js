import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const publicValuesScheme = {
    currentScroll : 0,
    progressPercentage: 0,
}

const ScrollListener = forwardRef((props, ref)=>{
    const valuesRef = useRef(publicValuesScheme);

    const callbacksArray = useRef([]);

    // add callback
    const addCallback = (callbackCall) => {
        callbacksArray.current.push(callbackCall);
    }
    // notify callbacks
    const notifyCallbacks = () =>{
        callbacksArray.current.forEach(
            (callbackCall)=>{
                try{
                    const [callback,value] = callbackCall
                    if (valuesRef.current?.[value]){
                        callback(valuesRef.current[value])
                    }
                }
                catch{
                    callbackCall()
                }
            }
        )
    }

    // update the values
    const updateValues = () => {
        // recover scroll info
        const currentScroll = props?.pageRef?.current.scrollTop;
        const scrollHeight = props?.pageRef?.current.scrollHeight - window.innerHeight;
        const progressPercentage = (currentScroll/scrollHeight)*100;
        //update the public values
        valuesRef.current.currentScroll = currentScroll;
        valuesRef.current.progressPercentage = progressPercentage;
        // notify with callbacks
        notifyCallbacks();
    };

    // a ref to export our public values
    const publicRef = {
        updateValues : updateValues,
        addCallback : addCallback,
        ...valuesRef.current
    };

    // useImperativeHandle to export the ref
    useImperativeHandle(ref, ()=>publicRef)

    return null;
})
export default ScrollListener;