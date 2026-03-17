import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
const CloseBtn = () => {
  const navigate = useNavigate();
  const onClose = navigate(-1);
  return (
    <button onClick={onClose} className="modal-close-btn">
      <Icon icon="clarity:window-close-line"
        width={24}
        height={24}
        color="#333333"
      />
    </button>
  )
}
export default CloseBtn;
