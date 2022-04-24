import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className="pt-6 pb-24">
      <div className="relative container mx-auto mb-16 flex h-[600px]">
        <div className="basis-2/4 h-full pt-32 pr-24 pl-20 bg-primary rounded-tl-[40px]">
          <h2 className="mb-6 text-5xl font-bold text-white">
            Создай свой собственный праздник вместе с нами!
          </h2>
          <button className="flex items-center justify-center px-4 h-[46px] text-lg font-medium text-white border rounded-lg">
            Начать
          </button>
        </div>
        <div className="hero basis-2/4 h-full bg-cover bg-center rounded-tr-[40px]"></div>
        <div
          className="
            absolute left-2/4 bottom-10 -translate-x-2/4 w-[768px] mx-auto 
            flex items-center py-1 pr-1 pl-4 
            bg-white rounded-lg z-10
          ">
          <SearchIcon className="mr-4" />
          <input
            className="flex-grow outline-none text-lg font-normal text-black-text placeholder:text-grey-text"
            placeholder="Поиск..."
          />
          <button className="flex items-center justify-center px-6 ml-4 h-[46px] text-lg font-medium text-white bg-primary rounded">
            Найти
          </button>
        </div>
      </div>
      <div className="container mx-auto mb-14">
        <h3 className="mb-6 text-headline3 font-bold text-black-text">Новые рестораны</h3>
        <div className="flex justify-between">
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className="mb-6 text-headline3 font-bold text-black-text">Новые исполнители</h3>
        <div className="flex justify-between">
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
