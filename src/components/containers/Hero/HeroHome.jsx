import { motion } from 'framer-motion';
function HeroHome() {
  return (
    <div className="w-full  ">
      <div className=" flex lg:flex-row flex-col mt-[20px] justify-between w-full  items-center  px-8">
        <motion.div
          className=" flex flex-col gap-8 text-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            x: { type: 'spring', stiffness: 100 },
            opacity: { duration: 0.8 },
            ease: 'easeIn',
            duration: 1,
          }}
        >
          <h1 className=" lg:text-7xl text-5xl lg:leading-[5rem]  font-semibold">
            Get the food recipe more easier
          </h1>
          <p className=" text-[20px] fonr-semibold ">
            Find{' '}
            <span className="text-orange-400"> +100,000 good & delicious</span>{' '}
            recipe and start your amazing <br /> journey healthy food with us.
          </p>
          <div>
            <button className=" bg-orange-400 py-2 px-8 rounded-[10px] font-semibold">
              Contact Us
            </button>
          </div>
        </motion.div>
        <motion.div
          className="hero"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            x: { type: 'spring', stiffness: 100 },
            opacity: { duration: 0.8 },
            ease: 'easeIn',
            duration: 1,
          }}
        ></motion.div>
      </div>
    </div>
  );
}

export default HeroHome;
