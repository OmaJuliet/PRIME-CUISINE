import React, { useState } from 'react';
import Cards from './Cards';
import { list } from '../data';
import { FaSearch } from 'react-icons/fa';

interface CartItem {
  id: string;
  img: string;
  title: string;
  amount: number;
  price: number;
}

interface DetailsMobileProps {
  handleClick: (item: any) => void;
}

function DetailsMobile({ handleClick }: DetailsMobileProps) {
  const [category, setCategory] = useState(list);
  const [activeTab, setActiveTab] = useState('All');
  const [query, setQuery] = useState('');

  const handleBtns = (word: string) => {
    if (word === 'All') {
      setCategory(list);
    } else {
      const filtered = list.filter((item) => item.kind === word);
      setCategory(filtered);
    }
    setActiveTab(word);
  };

  return (
    <>
      <section className=" bg-bgColor">
        <section className="px-4 flex flex-col">
          <div className="relative mt-4">
            <input
              type="text"
              onChange={(event) => setQuery(event.target.value)}
              className="w-full h-11 py-2 px-4 text-base text-black rounded-lg outline-none"
              placeholder="Search food..."
            />
            <i>
              <FaSearch className="absolute left-3 top-3 text-lg w-4 h-4 text-center text-black focus:outline-none" />
            </i>
          </div>

          <div className="flex flex-wrap mt-4">
            <button
              value="All"
              onClick={() => handleBtns('All')}
              className={`mr-2 mb-2 text-brandColor border-brandColor border-2 py-1 px-4 md:w-24 h-10 rounded-lg text-base ${
                activeTab === 'All' ? 'bg-brandColor outline-none text-white' : ''
              }`}
            >
              All
            </button>
            <button
              value="African"
              onClick={() => handleBtns('African')}
              className={`mr-2 mb-2 text-brandColor border-brandColor border-2 py-1 px-4 md:w-24 h-10 rounded-lg text-base ${
                activeTab === 'African' ? 'bg-brandColor outline-none text-white' : ''
              }`}
            >
              African
            </button>
            <button
              value="American"
              onClick={() => handleBtns('American')}
              className={`mr-2 mb-2 text-brandColor border-brandColor border-2 py-1 px-4 md:w-24 h-10 rounded-lg text-base ${
                activeTab === 'American' ? 'bg-brandColor outline-none text-white' : ''
              }`}
            >
              American
            </button>
          </div>
        </section>

        <section className="flex flex-col">
          {category
            .filter((title) => {
              if (query === '') {
                return title;
              } else if (title.title.toLowerCase().includes(query.toLowerCase())) {
                return title;
              }
            })
            .map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
        </section>
      </section>
    </>
  );
}

export default DetailsMobile;
