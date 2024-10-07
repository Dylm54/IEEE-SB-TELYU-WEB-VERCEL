import { motion } from "framer-motion";

const Reveal = ({ children, width="full" }) => {
    return (
        <div className={width == "full" ? "w-full" : "w-fit"}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{once: true}}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
