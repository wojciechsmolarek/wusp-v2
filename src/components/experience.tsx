const Experience = ({
    text = "Default Text",
    num,
    i
} : {
    text: string;
    num: number;
    i: number;
}) => {
    return (
        <div
            className={`flex min-w-[243px] flex-col ${
            i === 3
                ? ""
                : "md:border-r"} border-primary-500 items-center justify-center gap-4]`}>
            <span
                className="text-primary-500 text-[50px] lg:text-[85px] tracking-widest leading-[70px] font-dm lg:leading-[106.25px] ">
                {num}
            </span>
            <p
                className="text-text-gray-200 text-base text-center lg:text-lg font-jost tracking-tight lg:leading-9">
                {text}
            </p>
        </div>
    );
};

export default Experience;
