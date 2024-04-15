import { zodResolver } from "@hookform/resolvers/zod";
import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form"; // Import the hook
import * as z from "zod";
import formSchema from "./formSchema";
import "./index.scss";

type FormInputs = z.infer<typeof formSchema>;

const Task1: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    alert(`Email: ${data.email} \nPassword: ${data.password}`);
  };

  return (
    <div id="task-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
          <div></div>
          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>
        <button type="submit">Login</button> {/* Type='submit' for forms */}
      </form>
    </div>
  );
};

export default Task1;
