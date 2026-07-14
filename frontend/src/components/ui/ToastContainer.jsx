import Toast from "./Toast";

function ToastContainer({

  toasts,

  removeToast,

}) {

  return (

    <div className="fixed top-6 right-6 z-[9999] space-y-4">

      {toasts.map((toast) => (

        <Toast

          key={toast.id}

          toast={toast}

          onClose={() =>
            removeToast(toast.id)
          }

        />

      ))}

    </div>

  );

}

export default ToastContainer;