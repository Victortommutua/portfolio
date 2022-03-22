/* eslint-disable @next/next/no-img-element */
import { ArrowCircleRightIcon } from '@heroicons/react/outline'
import { LockClosedIcon } from '@heroicons/react/solid'
import axios from 'axios';
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);

    try{
      const response = await axios.post("/api/newsletter",{email});
      setState("SUCCESS");
    }
    catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  }
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              loading='lazy'
              className="mx-auto h-12 w-auto"
              src="../logo.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Please input your Email </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <p  className="font-medium text-indigo-600 hover:text-indigo-500">
                hook up with me via social links provided in the footer section
              </p>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
              </div>
            </div>

            <div>
              <button
                type="button"
                disabled={state === "LOADING"}
                onClick={subscribe}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md 
                text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                ${state=== "LOADING" ? "button-gradient-loading" : ""}`}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <ArrowCircleRightIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Submit
              </button>
            </div>
            {state === "SUCCESS" && (
              <p className='w-1/2 mt-2 text-green-600'>Success!</p>
            )}
            {state === "ERROR" && (
              <p className='w-1/2 mt-2 text-red-600'>{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </>
  )
    }