/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
// import { useMutation } from "@tanstack/react-query";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import { DatasIsaLoading } from "../isLoading/DataIsLoading";
// import * as yup from "yup";
// import { UseAppDispatch } from "../../global/Sttore";
// import { User } from "../../global/ReduxState";
// import Swal from "sweetalert2";
// import { userSubscribe } from '../../utils/Api';
// import { useNavigate } from 'react-router-dom';

const Subscribe = () => {

    const [info, setInfo] = React.useState(false)

    const showInfo = () => {
        setInfo(!info)
    }

    // const validationSchema = yup.object({
    //     fullName: yup.string().required('Enter your full name'),
    //     email: yup.string().required('Enter your email'),
    // })

    // const navigate = useNavigate()

    // type formData =  yup.InferType<typeof validationSchema>

    // const dispatch = UseAppDispatch();

    // const posting = useMutation({
    //     mutationKey: ["subscribe"],
    //     mutationFn: userSubscribe,

    //     onSuccess: (data: any) => {

    //         dispatch(User(data.data))

    //         // console.log(data.data)

    //         if (data.data) {
    //             Swal.fire({
    //               title: "You have successfully subscribed",
    //               text: "Thank you for subscribing. Do not subscribe again. This email can only subscribe once.",
    //               icon: "success",
    //             //   timer: 4000,
    //             //   timerProgressBar: true,
    //             });
    //             navigate("/");
    //           }
    //     } 
    // });

    // const {
    //     handleSubmit,
    //     formState: {errors},
    //     register,
    //     reset
    // } = useForm<formData>({
    //     resolver: yupResolver(validationSchema)
    // });


    // const submit = handleSubmit(async (data) => {
    //     // e.preventDefault()
    //     posting.mutate(data)
    //     reset()

    //     // console.log(data)
    // })

  return (
    <div id="" className="w-full h-[100vh  flex justify-center items-center bg-blac relative py-[30px] md:pt-[45px] shadow-md font-pop" >
        <div className="w-[85%] flex flex-col justify-center items-center md:justify-between ">
            <h5 className="md:w-[60%] lg:w-[50%] font-semibold text-[14px] text-[#00a4f2 mb-[10px] text-center font-bold">DO YOU WANT REGULAR UPDATES FROM US?</h5>

            <h5 className="font-semibold text-[#00a4f2 mb-[10px]">Subscribe to Our Newsletter</h5>

            <button className='w-[120px] h- bg-transparent rounded-[25px] text-[#23a1db] border-[1px] border-[#23a1db] hover:bg-[#23a1db] hover:text-white hover:border- hover:outline-none' 
            onClick={showInfo}
            >Subscribe</button>


            { info ? 
                <div className="mt-[20px] flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform translate-x-3">
                    <form 
                    // onSubmit={submit} 
                    className=" flex flex-col items-center justify-cente gap-3" action="">
                        <input type="text" placeholder="FullName" className="w-[280px] md:w-[350px] lg:w-[500px] h-[38px] text-[13px] border-[#063e60] rounded-md border-[1px] px-3 outline-none bg-[fffffff]"
                        // {...register("fullName")}
                         />
                         {/* <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.fullName && errors?.fullName.message}</p> */}

                        <input type="email" placeholder="Email" className="w-[280px] md:w-[350px] lg:w-[500px] h-[38px] text-[13px] border-[#063e60] rounded-md border-[1px] px-3 outline-none bg-[#ffffff]" 
                        // {...register("email")}
                        />
                        {/* <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.email && errors?.email.message}</p> */}

                        {/* {posting.isPending ? */}

                            {/* (<div className="w-[100px] flex justify-center items-center">
                                <DatasIsaLoading /> 
                            </div>) */}

                        {/* : */}

                            <button className='w-[100px] text-[13px] h-[35px] bg-transparent rounded-md text-[#23a1db] border-[1px] border-[#23a1db] hover:bg-[#23a1db] hover:text-white hover:border-none hover:outline-none' type='submit'>Submit</button>
                        {/* } */}

                    </form>
                </div>

            : 
            null }

            <h5 className="font-semibold text-[#00a4f2 text-[10px] text-center mt-[15px] mb-[10px] w-full md:w-[60%]">By subscribing to Grace Access Church Newsletter, you consent to receiving recurring automated messages (i.e. service reminders, upcoming events etc.) via your emial.</h5>
        </div>
    </div>
  )
}

export default Subscribe