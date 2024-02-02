import React, { useEffect, useRef } from "react";
import p5 from "p5";
import sketch from "../sketch";
import { useNavigate } from "react-router-dom";
const TEXT = "Happy Birthday Ksyusha!!!";

export function Birthday() {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvasDivElement = canvasRef.current;

    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);

    setTimeout(() => {
      navigate("/birth");
    }, 7000);
  }, []);
  return (
    <div className="main">
      <div ref={canvasRef} />;
    </div>
  );
}
