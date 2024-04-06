import { motion } from 'framer-motion';
function HeroHome() {
  return (
    <div className="w-full h-[90vh] ">
      <div className=" flex lg:flex-row justify-between w-full h-full items-center px-16">
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
          <h1 className=" text-7xl leading-[5rem] font-semibold">
            Get the food <br /> recipe more <br /> easier
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
