import toast from "react-hot-toast";
export const paymentHandler = {
  getTokenPay: async (payload, resetForm) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/pay`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      const token = data.token;

      if (!window.snap) {
        alert("Midtrans belum load");
        return;
      }

      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log("SUCCESS", result);

          toast.success("pembayaran berhasil");
          if (resetForm) {
            resetForm();
          }
        },

        onPending: function (result) {
          console.log("PENDING", result);
        },

        onError: function (result) {
          console.log("ERROR", result);

          toast.error("pembayaran gagal");
        },

        onClose: function () {
          toast("Popup ditutup");
        },
      });
    } catch (error) {
      // console.error("Error fetch payment method", error);
      toast.error("Pembayaran gagal dimuat");
      throw error;
    }
  },
};
