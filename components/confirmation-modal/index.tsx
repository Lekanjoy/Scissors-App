'use client'

type ConfirmationModalProps = {
  showModal: boolean;
  setShowModal: (prevState: boolean) => void;
  url: {
    id: number;
  };
  deleteLink: (id: number) => void;
  isLoading: boolean;
};

const ConfirmationModal = ({
  showModal,
  setShowModal,
  url,
  deleteLink,
  isLoading,
}: ConfirmationModalProps) => {
  
  return (
    <div
      className={`fixed inset-0 bg-[rgba(0,0,0,0.1)]  flex items-center justify-center z-[150] ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div className="bg-white shadow-md border w-full max-w-md p-6 rounded-lg">
        <div className="flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-red-500 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 12M12 22L22 12" />
          </svg>
          <h2 className="text-xl font-bold text-gray-800">Confirm Delete</h2>
        </div>
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete this link? This action cannot be
          undone.
        </p>
        <div className="flex justify-end">
          <button
            className={`px-4 py-2 rounded-md text-white ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
            onClick={() => deleteLink(url.id)}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
          <button
            className="ml-2 px-4 py-2 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300"
            onClick={() => setShowModal(!showModal)}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
