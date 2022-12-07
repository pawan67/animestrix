import Link from "next/link";
import React from "react";
import { motion, useIsPresent } from "framer-motion";
function testpage() {
  const isPresent = useIsPresent();
  return (
    <div>
      <Link href="/">Home</Link>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  );
}

export default testpage;
