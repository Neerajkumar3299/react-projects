import { useEffect } from "react";
function Alert({ alert, showAlert }) {
  const { show, msg, type } = alert;
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 2000);
  });
  return (
    <>
      <div className="alert">
        <p className={`alert-${type}`}>{msg}</p>
      </div>
    </>
  );
}
export default Alert