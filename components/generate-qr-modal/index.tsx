import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";

interface GenerateQRModalProps {
  showQRcodeModal: boolean;
  setShowQRCodeModal: (showQRcodeModal: boolean) => void;
  QRCodeImageLink: string;
}

const GenerateQRCodeModal = ({
  showQRcodeModal,
  setShowQRCodeModal,
  QRCodeImageLink,
}: GenerateQRModalProps) => {
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 400;
      canvas.height = 400;
      const ctx = canvas.getContext("2d");
      // Draw white rounded background
      const borderRadius = 10; // Set the desired border radius
      ctx!.fillStyle = "#FFFFFF";
      ctx!.beginPath();
      ctx!.moveTo(borderRadius, 0);
      ctx!.lineTo(canvas.width - borderRadius, 0);
      ctx!.arc(
        canvas.width - borderRadius,
        borderRadius,
        borderRadius,
        1.5 * Math.PI,
        0
      );
      ctx!.lineTo(canvas.width, canvas.height - borderRadius);
      ctx!.arc(
        canvas.width - borderRadius,
        canvas.height - borderRadius,
        borderRadius,
        0,
        0.5 * Math.PI
      );
      ctx!.lineTo(borderRadius, canvas.height);
      ctx!.arc(
        borderRadius,
        canvas.height - borderRadius,
        borderRadius,
        0.5 * Math.PI,
        Math.PI
      );
      ctx!.lineTo(0, borderRadius);
      ctx!.arc(
        borderRadius,
        borderRadius,
        borderRadius,
        Math.PI,
        1.5 * Math.PI
      );
      ctx!.closePath();
      ctx!.fill();

      const qrCodeImage: HTMLImageElement = new Image();
      qrCodeImage.crossOrigin = "anonymous";
      qrCodeImage.src = QRCodeImageLink;
      qrCodeImage.onload = () => {
        // Calculate the center position of the canvas
        const centerX = canvas.width / 2;

        // Draw the brand name
        ctx!.font = "20px sans-serif";
        ctx!.fillStyle = "#005AE2";
        ctx!.textAlign = "center";
        const brandNameY = 50; // Set the desired Y position of the brand name
        ctx!.fillText("Scissor.com", centerX, brandNameY);

        // Draw the QR code image
        const qrCodeWidth = 200;
        const qrCodeHeight = 200;
        const qrCodeX = centerX - qrCodeWidth / 2;
        const qrCodeY = brandNameY + 30; // Set the desired Y position of the QR code image
        ctx!.drawImage(
          qrCodeImage,
          qrCodeX,
          qrCodeY,
          qrCodeWidth,
          qrCodeHeight
        );
        canvas.toBlob((blob) => {
          saveAs(blob!, "scissor.com-qr-code.png");
          setIsDownloading(false);
          toast.success('QR Code download successfull!')
          setShowQRCodeModal(false);
        });
      };
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!')
    }
  };

  return (
    <div
      className={`fixed z-[200] inset-0  items-center justify-center ${
        showQRcodeModal ? "flex" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 lg:min-w-[400px]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-primaryColor font-semibold">
            Scissor.com
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setShowQRCodeModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <img src={QRCodeImageLink} alt="QR Code" />
          </div>
          <button
            className={`flex items-center gap-x-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600
            ${isDownloading && 'cursor-not-allowed'}`}
            onClick={handleDownload}
            disabled={isDownloading}
          >
            <FaDownload />
            {isDownloading ? 'Downloading...' : 'Download'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateQRCodeModal;
