import QRCode from "qrcode";
import { useState } from "react";
import "./QrGenerator.css";

function QrGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const generateQRCode = () => {
    QRCode.toDataURL(input, (err, input) => {
      if (err) {
        console.error(err);
        return;
      }
      setQrCode(input);
    });
  };
  const download = () => {

  }
  return (
    <div className="qr-generator">
      <div className="input-container">
        <input
          type="text"
          id="input"
          placeholder="Eg: https://google.com/ "
          value={input}
          onChange={handleInputChange}
        />
        <button className="submit" onClick={generateQRCode}>
          Generate
        </button>
      </div>
      {qrCode && (
      <div className="display-container">
        <img src={qrCode} alt="QR code" id="qr" />

        <a className="download-btn" href={qrCode} download="qrcode.png">Download QR Code</a>
      </div>
      )}
    </div>
  );
}

export default QrGenerator;
