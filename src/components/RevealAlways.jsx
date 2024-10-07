import { motion } from "framer-motion";

const RevealAlways = ({ children }) => {
    return (
        <div className="w-full">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{once: window.innerWidth >= 640 ? false : true}}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealAlways;