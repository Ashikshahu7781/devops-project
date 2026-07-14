import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  X,
} from "lucide-react";

function Toast({

  toast,

  onClose,

}) {

  const styles = {

    success: {
      icon: CheckCircle,
      color:
        "border-green-500 bg-green-50 text-green-700",
    },

    error: {
      icon: XCircle,
      color:
        "border-red-500 bg-red-50 text-red-700",
    },

    warning: {
      icon: AlertTriangle,
      color:
        "border-yellow-500 bg-yellow-50 text-yellow-700",
    },

    info: {
      icon: Info,
      color:
        "border-blue-500 bg-blue-50 text-blue-700",
    },

  };

  const config = styles[toast.type];

  const Icon = config.icon;

  return (

    <div
      className={`w-96 rounded-2xl border-l-4 shadow-xl bg-white p-5 flex justify-between items-start animate-in slide-in-from-right ${config.color}`}
    >

      <div className="flex gap-4">

        <Icon size={24} />

        <p className="font-medium">

          {toast.message}

        </p>

      </div>

      <button
        onClick={onClose}
      >

        <X size={18} />

      </button>

    </div>

  );

}

export default Toast;