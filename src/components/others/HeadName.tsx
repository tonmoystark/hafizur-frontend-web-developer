import { AnimatedGradientText } from "../ui/AnimatedGradientText";

const HeadName = () => {
  return (
    <div>
      <AnimatedGradientText
        speed={2}
        colorFrom="#ffaa40"
        colorTo="#9c40ff"
        className="text-4xl font-semibold tracking-tight"
      >
        <a href="">Hafizur.</a>
      </AnimatedGradientText>
    </div>
  );
};

export default HeadName;
