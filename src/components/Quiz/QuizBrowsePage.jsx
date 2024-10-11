import React, { useState } from 'react';
import { Data } from '../../assets/Data';
import robot3 from '../../assets/images/robot3.jpeg';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import QuizSection from '../Landing/QuizSection';

const QuizBrowsePage = () =>
{
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
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

  return (
    <>
      {index < 0 ? (<QuizSection />) : (
        <div className="flex justify-center items-center bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 h-[500px] py-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white max-w-xl w-full p-3 shadow-xl overflow-y-auto"
          >
            <div className="flex flex-col sm:flex-row items-center mb-3">
              <img className='w-12 h-12 rounded-full border-2 border-teal-500 mb-2 sm:mb-0 sm:mr-3' src={robot3} alt="Robot" />
              <h1 className='text-lg sm:text-xl font-bold text-teal-700 text-center sm:text-left'>Customize Your Kits and Plans</h1>
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
              className='mb-3'
            >
              <h2 className="bg-teal-50 text-teal-800 rounded-lg p-3 shadow-md mb-3 text-sm font-semibold">
                {data[index].question}
              </h2>

              <div className="space-y-2">
                {[1, 2, 3, 4].map(option => (
                  <motion.button
                    key={option}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left bg-white border rounded-lg p-2 transition-all duration-200 text-sm ${selectedOption === option
                        ? 'border-teal-500 bg-teal-50 text-teal-700'
                        : 'border-gray-200 hover:border-teal-300 text-gray-700'
                      }`}
                    onClick={() => checkAns(option)}
                  >
                    {data[index][`option${option}`]}
                  </motion.button>
                ))}
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
