import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { SelectedPage } from "../shared/types";

const MyForm = ({ setSelectedPage }) => {
  const Weekend = [
    { value: "01", label: "Yes" },
    { value: "02", label: "No" },
  ];

  const Month = [
    { value: "02", label: "Feb" },
    { value: "03", label: "Mar" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "Jul" },
    { value: "08", label: "Aug" },
    { value: "09", label: "Sep" },
    { value: "10", label: "Oct" },
    { value: "11", label: "Nov" },
    { value: "12", label: "Dec" },
  ];

  const VisitorType = [
    { value: "01", label: "Returning Visitor" },
    { value: "02", label: "New Visitor" },
    { value: "03", label: "Other" },
  ];

  const OperatingSystems = [
    { value: "01", label: "Windows" },
    { value: "02", label: "iOS" },
    { value: "03", label: "Mac" },
    { value: "04", label: "Other" },
  ];

  const Browser = [
    { value: "01", label: "Chrome" },
    { value: "02", label: "Safari" },
    { value: "03", label: "Other" },
  ];

  const TrafficType = [
    { value: "01", label: "Direct" },
    { value: "02", label: "Referring Sites" },
    { value: "03", label: "Search Engine" },
    { value: "04", label: "Social" },
    { value: "05", label: "Paid" },
    { value: "06", label: "Other" },
  ];

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    register("BounceRates", {
      required: "BounceRates is required",
      validate: (value) => {
        const floatValue = parseFloat(value);
        return (
          (floatValue >= 0 && floatValue <= 1) ||
          "BounceRates should be between 0 and 1"
        );
      },
    });
    register("ExitRates", {
      required: "ExitRates is required",
      validate: (value) => {
        const floatValue = parseFloat(value);
        return (
          (floatValue >= 0 && floatValue <= 1) ||
          "ExitRates should be between 0 and 1"
        );
      },
    });
  }, [register]);

  const onSubmit = async (data, e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
    try {
      const response = await axios.post(
        "https://ml-webapp-3ni0.onrender.com/predict",
        data
      );
      const predictionResult = response.data.prediction;
      let clusterResult =
        response.data.cluster === "1"
          ? "Casual Buyers"
          : response.data.cluster === "0"
          ? "Regular Buyers"
          : "error";
      if (predictionResult === "[ True]") {
        Swal.fire({
          title: "Prediction Result",
          text: `This user will contribute to revenue`,
          icon: "success",
          confirmButtonText: "Done",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Cluster Result",
              text: `This user belongs to cluster of ${clusterResult}`,
              icon: "info",
              confirmButtonText: "Done",
            });
          }
        });
      } else if (predictionResult === "[False]") {
        Swal.fire({
          title: "Prediction Result",
          text: `This user will not contribute to revenue`,
          icon: "error",
          confirmButtonText: "Done",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Cluster Result",
              text: `This user belongs to cluster of ${clusterResult}`,
              icon: "info",
              confirmButtonText: "Done",
            });
          }
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const inputStyle =
    "mb-5 mt-1 w-full rounded-lg bg-primary-300 p-5 placeholder-white";

  return (
    <section
      id="predict"
      className="mx-auto flex w-full items-center justify-center bg-gray-20 pb-32 pt-24"
    >
      <div className="basis-5/6">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Predict)}
        >
          <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h2 className="text-2xl font-bold text-center">
              Enter data to predict users contribution to revenue
            </h2>
          </motion.div>
          <form target="_blank" onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex">
              <div className="mt-10 items-center justify-between gap-8 md:flex md:w-1/3">
                <motion.div
                  className="mx-auto w-5/6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <input
                    className={inputStyle}
                    type="text"
                    placeholder="Bounce Rates"
                    {...register("BounceRates", {
                      maxLength: 10,
                    })}
                  />
                  {errors.BounceRates && (
                    <p>
                      {errors.BounceRates.message}
                      {errors.BounceRates.type === "maxLength" &&
                        "Your input exceed maximum length"}
                    </p>
                  )}

                  <input
                    className={inputStyle}
                    type="text"
                    placeholder="Exit Rates"
                    {...register("ExitRates", {
                      maxLength: 10,
                    })}
                  />
                  {errors.ExitRates && (
                    <p>
                      {errors.ExitRates.message}
                      {errors.ExitRates.type === "maxLength" &&
                        "Your input exceed maximum length"}
                    </p>
                  )}

                  <input
                    className={inputStyle}
                    type="text"
                    placeholder="Page Values"
                    {...register("PageValues", {
                      required: true,
                      maxLength: 10,
                    })}
                  />
                  {errors.PageValues && (
                    <p>
                      {errors.PageValues.message}
                      {errors.PageValues.type === "maxLength" &&
                        "Your input exceed maximum length"}
                    </p>
                  )}

                  <input
                    className={inputStyle}
                    type="text"
                    placeholder="Administrative Duration Per Page"
                    {...register("Administrative_Duration_Page", {
                      required: true,
                      maxLength: 10,
                    })}
                  />
                  {errors.Administrative_Duration_Page && (
                    <p>
                      {errors.Administrative_Duration_Page.message}
                      {errors.Administrative_Duration_Page.type ===
                        "maxLength" && "Your input exceed maximum length"}
                    </p>
                  )}
                </motion.div>
              </div>

              <div className="items-center justify-between gap-8 md:mt-10 md:flex md:w-1/3">
                <motion.div
                  className="mx-auto w-5/6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <input
                    className={inputStyle}
                    type="text"
                    placeholder="Informational Duration Per Page"
                    {...register("Informational_Duration_Page", {
                      required: true,
                      maxLength: 10,
                    })}
                  />
                  {errors.Informational_Duration_Page && (
                    <p>
                      {errors.Informational_Duration_Page.message}
                      {errors.Informational_Duration_Page.type ===
                        "maxLength" && "Your input exceed maximum length"}
                    </p>
                  )}

                  <input
                    className={inputStyle}
                    type="text"
                    placeholder="ProductRelated Duration Per Page"
                    {...register("ProductRelated_Duration_Page", {
                      required: true,
                      maxLength: 10,
                    })}
                  />
                  {errors.ProductRelated_Duration_Page && (
                    <p>
                      {errors.ProductRelated_Duration_Page.message}
                      {errors.ProductRelated_Duration_Page.type ===
                        "maxLength" && "Your input exceed maximum length"}
                    </p>
                  )}

                  <select
                    className={inputStyle}
                    {...register("Weekend", {
                      required: "Weekend is required",
                    })}
                  >
                    <option value="">Select Weekend</option>
                    {Weekend.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.Weekend && <p>{errors.Weekend.message}</p>}

                  <select
                    className={inputStyle}
                    {...register("Month", {
                      required: "Month is required",
                    })}
                  >
                    <option value="">Select Month</option>
                    {Month.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.Month && <p>{errors.Month.message}</p>}
                </motion.div>
              </div>

              <div className="items-center justify-between gap-8 md:mt-10 md:flex md:w-1/3">
                <motion.div
                  className="mx-auto w-5/6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <select
                    className={inputStyle}
                    {...register("VisitorType", {
                      required: "VisitorType is required",
                    })}
                  >
                    <option value="">Select Visitor Type</option>
                    {VisitorType.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.VisitorType && <p>{errors.VisitorType.message}</p>}

                  <select
                    className={inputStyle}
                    {...register("OperatingSystems", {
                      required: "OperatingSystems is required",
                    })}
                  >
                    <option value="">Select Operating System</option>
                    {OperatingSystems.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.OperatingSystems && (
                    <p>{errors.OperatingSystems.message}</p>
                  )}

                  <select
                    className={inputStyle}
                    {...register("Browser", {
                      required: "Browser is required",
                    })}
                  >
                    <option value="">Select Browser</option>
                    {Browser.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.Browser && <p>{errors.Browser.message}</p>}

                  <select
                    className={inputStyle}
                    {...register("TrafficType", {
                      required: "TrafficType is required",
                    })}
                  >
                    <option value="">Select Traffic Type</option>
                    {TrafficType.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.TrafficType && <p>{errors.TrafficType.message}</p>}
                </motion.div>
              </div>
            </div>
            <input
              type="submit"
              value="Predict"
              className="mt-10 cursor-pointer rounded-lg bg-primary-500 px-10 py-5 text-white"
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default MyForm;
