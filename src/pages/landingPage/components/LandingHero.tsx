import groupImage from "../../../assets/Group-313.svg"
import heroImage from "../../../assets/hero-icons.svg"

const LandingHero = () => {
  return (
    <div className="md:py-5 md:px-10 bg-torquoiseLight flex">
      <section className="flex flex-col justify-center items-center md:items-start leading-snug md:basis-2/5 w-full">
        <h3 className="text-[3rem] font-bold text-center md:text-left">Simplified your</h3>
        <h3 className="text-[3rem] font-bold text-center md:text-left">Shared Expenses</h3>
        <h3 className="text-[3rem] font-bold text-center md:text-left">On trips</h3>
        <img src={heroImage} alt="" className="w-48" />
        <div className="font-medium">
          <p>Easily track and manage shared costs with </p>
          <p>housemates, friends, family, or travel groups, all</p>
          <p>in one place.</p>
        </div>
        <a className="bg-torquoise text-white h-12 w-48 rounded-xl font-bold flex justify-center items-center cursor-pointer mt-5">
          <span>Get Started</span>
        </a>
      </section>
      <section className="hidden md:block">
        <img src={groupImage} alt="" />
      </section>
    </div>
  );
}

export default LandingHero
