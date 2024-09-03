import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { deleteProduct } from "../../services/productService";

function DeleteProduct(props) {
  const { item, onReload } = props;

  const deleteItem = async () => {
    const result = await deleteProduct(item);
    if (result) {
      onReload();
      Swal.fire({
        title: "Đã xoá!",
        text: "Bạn đã xoá thành công.",
        icon: "success",
      });
    }
  };
  const handleDelete = () => {
    Swal.fire({
      title: "Bạn có chắc muốn xoá?",
      text: "Nếu bạn xoá thì bạn sẽ không thể khôi phục lại được!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vẫn xoá",
      cancelButtonText: "Huỷ",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
      }
    });
  };

  return (
    <>
      <button onClick={handleDelete}>Xoá</button>
    </>
  );
}

export default DeleteProduct;
