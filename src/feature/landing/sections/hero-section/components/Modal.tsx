"use client";
import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  isShow: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ isShow }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-black border border-white rounded-2xl p-6 w-[90%] max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Connect Wallet</h2>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Input Wallet
        </label>
        <input
          type="text"
          placeholder="Enter wallet address"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-4 justify-end">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 hover:cursor-pointer transition"
            onClick={() => isShow(false)}
          >
            Send
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer transition"
            onClick={() => isShow(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
