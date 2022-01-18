import axios from "axios";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./AddService.css";
const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://infinite-thicket-64777.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal("DONE!", "Product Added Successfully", "success");
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="addService-form-bg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          autoComplete="off"
          className="my-1"
          placeholder="Name"
          {...register("serviceName", { required: true, maxLength: 20 })}
          required
        />
        <input
          autoComplete="off"
          className="my-1"
          placeholder="Price"
          type="number"
          {...register("price")}
          required
        />
        <input
          autoComplete="off"
          className="my-1"
          placeholder="Image Url"
          {...register("photoUrl")}
        />
        <textarea
          autoComplete="off"
          className="my-1"
          resize="none"
          placeholder="Description"
          {...register("serviceDescription")}
          required
        />
        <button className="addProductSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
