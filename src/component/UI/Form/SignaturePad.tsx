import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad: React.FC = () => {
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
    const [padActive , setPadActive] =useState(false)
  // Function to save the signature
  const saveSignature = () => {
    if (sigCanvas.current) {
      setImageURL(sigCanvas.current.toDataURL("image/png"));
    }
  };

  // Function to clear the signature pad
  const clearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      setImageURL(null);
    }
  };

  return (
    <div >
        <SignatureCanvas
        onBegin={ ()=>setPadActive(true)}
        onEnd={ ()=>setPadActive(false)}        
        ref={sigCanvas}
        penColor="black"
        canvasProps={{ className: ` bg-white border w-[100%] h-[70px] cursor-pointer transition-all border-gray-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            padActive? "border-blue-500 h-[120px]": "border-gray-300"} ${ imageURL === null ? "block": "hidden"}`  }}
      />
      <div className={`mt-4 flex gap-2 ${ imageURL === null ? "block": "hidden"}`}>
        <button onClick={saveSignature} className="px-3 py-1 bg-blue-500 text-white rounded">
          Save signature
        </button>
      </div>
     
      {imageURL && (
        <div className={""}>
          {/* <h3 className="font-medium">Saved Signature:</h3> */}
          <img src={imageURL} alt="Saved signature" className="border rounded border-gray-300 " /> 
          <div className={`mt-4 flex gap-2 ${ imageURL === null ? "hidden": "block"}`}>
                <button onClick={clearSignature} className="px-3 py-1 bg-gray-500 text-white rounded">
                    Clear signature
                </button>
         </div>
        </div>
      )}
    </div>
  );
};

export default SignaturePad;
