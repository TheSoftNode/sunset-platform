import React, { useState } from 'react';
import { Data } from '../../assets/Data';
import robot3 from '../../assets/images/robot3.jpeg';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw, X } from 'lucide-react';
import QuizSection from '../Landing/QuizSection';

const QuizBrowsePage = () =>
{
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [close, setClose] = useState(false);
  const data = Data;

  const next = () =>
  {
    if (selectedOption === null)
    {
      toast.error('Please select an option before moving to the next question.');
      return;
    }

    if (index < data.length - 1)
    {
      setIndex(index + 1);
      setSelectedOption(null);
      setProgress(progress + 100 / data.length);
    } else
    {
      setProgress(progress + 20)
      toast.success("Congratulations! You have completed the quiz.");
    }
  };

  const back = () =>
  {
    if (index > -1)
    {
      setIndex(index - 1);
      setProgress(progress - 100 / data.length);
      setSelectedOption(null);
    }

    if (index <= 0)
    {
      return <QuizSection />;
    };
  }

  const handleButtonReset = () =>
  {
    setIndex(0);
    setProgress(0);
    setSelectedOption(null);
  };

  const checkAns = (option) =>
  {
    setSelectedOption(option);
  };

  const getColor = () =>
  {
    if (progress < 40) return 'bg-red-600';
    else if (progress < 60) return 'bg-yellow-500';
    else return 'bg-green-500';
  };

  const getOptionCount = () =>
  {
    let count = 0;
    for (let i = 1; i <= 4; i++)
    {
      if (data[index][`option${i}`]) count++;
    }
    return count;
  };

  const handleClose = () =>
  {
    setClose(true);
  };

  return (
    <>
      {index < 0 || close ? (<QuizSection />) : (
        <div className="flex justify-center items-center bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 h-[500px] py-2 px-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white max-w-xl w-full p-4 shadow-xl rounded-lg h-[28rem] overflow-y-auto"
          >

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-2 right-2 bg-gray-200 hover:bg-red-400 hover:text-white text-gray-700 rounded-full p-1 transition duration-200"
              onClick={handleClose}
            >
              <X size={20} />
            </motion.button>

            <div className="flex gap-3  items-center mb-4">
              <img className='w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-teal-500 ' src={robot3} alt="Robot" />
              <h1 className='text-sm prose sm:text-xl font-bold text-teal-700 text-center sm:text-left'>Customize Your Kits and Plans</h1>
            </div>

            <div className='mb-3'>
              <div className='bg-gray-200 rounded-full h-2 overflow-hidden'>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                  className={`h-full ${getColor()} rounded-full`}
                ></motion.div>
              </div>
              <div className='text-right text-xs mt-1 text-gray-600'>{`Question ${index + 1} of ${data.length}`}</div>
            </div>

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className='mb-4 w-full'
            >
              <h2 className="bg-teal-50 text-teal-800 rounded-lg p-3 shadow-md mb-3 text-sm prose w-full font-semibold">
                {data[index].question}
              </h2>

              <div className="flex flex-col h-full justify-between">
                {/* <div className="space-y-3"> */}
                {[...Array(getOptionCount())].map((_, i) =>
                {
                  const optionNumber = i + 1;
                  return (
                    <motion.button
                      key={optionNumber}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left flex bg-white border rounded-lg p-2 prose transition-all duration-200 text-sm ${selectedOption === optionNumber
                        ? 'border-teal-500 bg-teal-50 text-teal-700'
                        : 'border-gray-200 hover:border-teal-300 text-gray-700'
                        } ${getOptionCount() <= 2 ? 'mt-2 mb-5' : 'mb-2'}`}
                      onClick={() => checkAns(optionNumber)}
                    >
                      {data[index][`option${optionNumber}`]}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            <div className='flex justify-between gap-2'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-3 rounded-lg transition duration-200 flex items-center justify-center text-xs"
                onClick={back}
              >
                <ChevronLeft size={16} className="mr-1" />
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-lg transition duration-200 flex items-center justify-center text-xs"
                onClick={handleButtonReset}
              >
                <RotateCcw size={16} className="mr-1" />
                Reset
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-3 rounded-lg transition duration-200 flex items-center justify-center text-xs"
                onClick={next}
              >
                {index < data?.length - 1 ? (
                  <>
                    Next
                    <ChevronRight size={16} className="ml-1" />
                  </>
                ) : "Submit"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default QuizBrowsePage;
