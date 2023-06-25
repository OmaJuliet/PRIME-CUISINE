import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import { list } from '../data';

interface CartItem {
  id: string;
  img: string;
  title: string;
  amount: number;
  price: number;
}

interface DetailsProps {
  handleClick: (item: any) => void;
}

function Details({ handleClick }: DetailsProps) {
  const [category, setCategory] = useState(list);
  const [activeTab, setActiveTab] = useState('All');

  const handleBtns = (word: string) => {
    if (word === 'All') {
      setCategory(list);
    } else {
      const filtered = list.filter(item => item.kind === word);
      setCategory(filtered);
    }

    setActiveTab(word);
  };


  return (
    <>
      <section className="container pt-8 mx-auto w-full bg-bgColor">
        <div className="flex flex-wrap mt-4 justify-center lg:mb-4 mb-8">
          <button
            value="All"
            onClick={() => handleBtns('All')}
            className={`mr-2 text-brandColor bg-white border-0 py-1 px-6 md:w-24 h-10 hover:bg-brandColor hover:text-white rounded-lg text-lg focus:bg-brandColor focus:text-white ${activeTab === 'All' ? 'bg-bgColor' : ''
              }`}
          >
            All
          </button>
          <button
            value="African"
            onClick={() => handleBtns('African')}
            className={`mr-2 text-brandColor bg-white border-0 py-1 px-6 md:w-24 h-10 hover:bg-brandColor hover:text-white rounded-lg text-lg focus:bg-brandColor focus:text-white ${activeTab === 'Bags' ? 'bg-brandColor' : ''
              }`}
          >
            African
          </button>
          <button
            value="Shoes"
            onClick={() => handleBtns('American')}
            className={`mr-2 text-brandColor bg-white border-0 py-1 md:w-24 h-10 hover:bg-brandColor hover:text-white rounded-lg text-lg focus:bg-brandColor focus:text-white ${activeTab === 'Shoes' ? 'bg-brandColor' : ''
              }`}
          >
            American
          </button>
          <button
            value="Chinese"
            onClick={() => handleBtns('Chinese')}
            className={`mr-2 text-brandColor bg-white border-0 py-1 md:w-24 h-10 hover:bg-brandColor hover:text-white rounded-lg text-lg focus:bg-brandColor focus:text-white ${activeTab === 'Jewelries' ? 'bg-brandColor' : ''
              }`}
          >
            Chinese
          </button>
        </div>

        <section className="flex flex-row flex-wrap">
          {category.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}
        </section>
      </section>
    </>
  );
}

export default Details;
