import { Icon } from '@iconify/react/dist/iconify.js';
import MonitorCanvas from './MonitorCanvas';
import ThreeCanvas from './ThreeCanvas';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row md:h-screen p-1 zidx-4">
            <div className="w-full md:w-1/2 h-[full - 1] flex items-center justify-center md:mt-0">
                <ThreeCanvas />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-5 text-gray-500 md:-mt-12">Bem-vindo à</h1>

                <div className='relative md:block hidden'>
                    <div className='text-[10px] flex items-center gap-1 absolute -right-8 group zidx-4'>
                        <Icon icon="material-symbols:info-outline" width={22} />
                        <p className='group-hover:block hidden w-max absolute p-2 rounded bg-gray-300 -bottom-10 -left-9 shadow'>Imagem interativa</p>
                    </div>
                    <MonitorCanvas />
                </div>

                <div className='flex mb-5 text-6xl md:text-7xl font-bold'>
                    <h1 className='text-primary-dark'>Solutiva</h1>
                    <h1 className='text-dark'>Tech</h1>
                </div>

                <p className="w-[90%] text-gray-600 mb-6 text-center text-md md:text-lg leading-6">
                    SolutivaTech é uma empresa focada em fornecer soluções inovadoras e abrangentes no campo da tecnologia da informação.
                    Com um compromisso com a excelência financeira.
                </p>

                <Image src={'/images/mouse.gif'} alt='Animação mouse rolando...' width={24} height={24} />
            </div>
        </section>
    );
};

export default HeroSection;