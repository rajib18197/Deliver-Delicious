import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Checkbox from "../../ui/Checkbox";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMeal } from "./mealSlice";

export default function CreateMeal() {
  const { register, handleSubmit, formState, reset } = useForm();
  const [isPopular, setIsPopular] = useState(false);
  const [isRecommended, setIsRecommended] = useState(false);
  const { errors } = formState;

  const dispatch = useDispatch();

  function onSubmit(data) {
    console.log(data);
    console.log(isPopular, isRecommended);
    const meal = { id: crypto.randomUUID(), ...data, isPopular, isRecommended };
    dispatch(addMeal(meal));
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label={"Name"} error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label={"Image Url"} error={errors?.image?.message}>
        <Input
          type="text"
          id="image"
          {...register("image", {
            required: "This field is required",
            validate: (value) =>
              (value.startsWith("http") &&
                (value.includes(".jpg") || value.includes(".png"))) ||
              "Image need to be an url(jpg or png image)",
          })}
        />
      </FormRow>

      <FormRow label={"Price"} error={errors?.price?.message}>
        <Input
          type="number"
          id="price"
          {...register("price", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price should be greater than 1",
            },
          })}
        />
      </FormRow>

      <FormRow>
        <Checkbox
          id="recommend"
          checked={isRecommended}
          onChange={() => setIsRecommended((cur) => !cur)}
        >
          Recommended
        </Checkbox>

        <Checkbox
          id="popular"
          checked={isPopular}
          onChange={() => setIsPopular((cur) => !cur)}
        >
          Popular
        </Checkbox>
      </FormRow>

      <FormRow>
        <Button>Add Food</Button>
      </FormRow>
    </Form>
  );
}
