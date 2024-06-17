import ThreeCanvas from './ThreeCanvas';

const HeroSection = () => {
    return (
        <section className="flex h-screen">
            <div className="w-1/2 h-[full - 1] flex items-center justify-center mt-1">
                <ThreeCanvas />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-white">
                <h1 className="text-3xl font-bold mb-5 text-gray-500">Bem-vindo à</h1>
                <div className='flex mb-5 text-6xl font-bold'>
                    <h1 className='text-primary-dark'>Solutiva</h1>
                    <h1 className='text-dark'>Tech</h1>
                </div>
                <p className="w-[90%] text-gray-600 mb-6 text-center text-md leading-6">
                    SolutivaTech é uma empresa focada em fornecer soluções inovadoras e abrangentes no campo da tecnologia da informação.
                    Com um compromisso com a excelência financeira.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
