"use client";

import { useState } from "react";

function Page() {
  return (
    <div>
      <TransferList
        list1={["HTML", "Javascript", "CSS", "Typescript"]}
        list2={["React", "Angular", "Vue", "PHP"]}
      />
    </div>
  );
}

function TransferList({ list1, list2 }: { list1: string[]; list2: string[] }) {
  const [list1State, setList1State] = useState(list1);
  const [list2State, setList2State] = useState(list2);
  const [checkedItems, setCheckedItems] = useState<
    { title: string; checked: boolean }[]
  >([...list1, ...list2].map((item) => ({ title: item, checked: false })));

  const handleClickDoubleLeft = () => {
    setList1State((prev) => [...prev, ...list2State]);
    setList2State([]);
  };

  const handleClickLeft = () => {
    const rightChecked = checkedItems
      .filter((ci) => ci.checked && list2State.includes(ci.title))
      .map((ci) => ci.title);

    const rightUnchecked = checkedItems
      .filter((ci) => !ci.checked && list2State.includes(ci.title))
      .map((ci) => ci.title);

    setList1State((prev) => [...prev, ...rightChecked]);
    setList2State(rightUnchecked);
  };

  const handleClickDoubleRight = () => {
    setList2State((prev) => [...prev, ...list1State]);
    setList1State([]);
  };

  const handleClickRight = () => {
    const leftChecked = checkedItems
      .filter((ci) => ci.checked && list1State.includes(ci.title))
      .map((ci) => ci.title);

    const leftUnchecked = checkedItems
      .filter((ci) => !ci.checked && list1.includes(ci.title))
      .map((ci) => ci.title);

    setList2State((prev) => [...prev, ...leftChecked]);
    setList1State(leftUnchecked);
  };

  const onClickedItem = (listName: string, item: string, value: any) => {
    const newCheckedItems = checkedItems.map((ci) => {
      if (ci.title === item) {
        ci.checked = !ci.checked;
      }
      return ci;
    });
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className="flex gap-4">
      <List
        checkedItems={checkedItems}
        listName="list1"
        tlist={list1State}
        onClickItem={(listName: string, item: string, value) =>
          onClickedItem(listName, item, value)
        }
      />
      <div className="flex flex-col">
        <button onClick={handleClickDoubleLeft} className="border-2">
          &larr;&larr;
        </button>
        <button onClick={handleClickLeft} className="border-2">
          &larr;
        </button>
        <button onClick={handleClickDoubleRight} className="border-2">
          &rarr;&rarr;
        </button>
        <button onClick={handleClickRight} className="border-2">
          &rarr;
        </button>
      </div>
      <List
        checkedItems={checkedItems}
        listName="list2"
        tlist={list2State}
        onClickItem={(listName: string, item: string, value: any) =>
          onClickedItem(listName, item, value)
        }
      />
    </div>
  );
}

function List({
  checkedItems,
  listName,
  tlist,
  onClickItem,
}: {
  checkedItems: { title: string; checked: boolean }[];
  listName: string;
  tlist: string[];
  onClickItem: (listName: string, item: string, value: any) => void;
}) {
  return (
    <ul className="flex flex-col w-[100px]">
      {tlist.map((item) => {
        const foundItem = checkedItems.filter((ci) => ci.title === item)[0];
        const checked = foundItem.checked;

        return (
          <li key={item}>
            <input
              onClick={(e) => onClickItem(listName, item, e.target.value)}
              type="checkbox"
              value={item}
              id={item}
              name={item}
              checked={checked}
            />
            <label htmlFor={item}>{item}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default Page;
