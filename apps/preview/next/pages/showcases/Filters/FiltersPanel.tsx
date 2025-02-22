import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  SfAccordionItem,
  SfButton,
  SfCounter,
  SfChip,
  SfIconCancel,
  SfIconClose,
  SfIconChevronLeft,
  SfListItem,
  SfThumbnail,
  SfRadio,
  SfSelect,
  SfCheckbox,
} from '@storefront-ui/react';
import { useState } from 'react';
import classNames from 'classnames';

const sortOptions = [
  { id: 'sort1', label: 'Relevance', value: 'relevance' },
  { id: 'sort2', label: 'Price: Low to High', value: 'price low to high' },
  { id: 'sort3', label: 'Price: High to Low', value: 'price high to low' },
  { id: 'sort4', label: 'New Arrivals', value: 'new arrivals' },
  { id: 'sort5', label: 'Customer Rating', value: 'customer rating' },
  { id: 'sort6', label: 'Bestsellers', value: 'bestsellers' },
];

const filtersData = [
  {
    id: 'acc1',
    summary: 'Size',
    type: 'size',
    details: [
      { id: 's1', label: '6', value: '6', counter: 10 },
      { id: 's2', label: '6.5', value: '6.5', counter: 10 },
      { id: 's3', label: '7', value: '7.5', counter: 30 },
      { id: 's4', label: '8', value: '8', counter: 0 },
      { id: 's5', label: '8.5', value: '8.5', counter: 3 },
      { id: 's6', label: '9', value: '9', counter: 7 },
      { id: 's7', label: '9.5', value: '9.5', counter: 9 },
      { id: 's8', label: '10', value: '10', counter: 11 },
      { id: 's9', label: '10.5', value: '10.5', counter: 12 },
      { id: 's10', label: '11', value: '11', counter: 0 },
      { id: 's11', label: '11.5', value: '11.5', counter: 4 },
      { id: 's12', label: '12', value: '12', counter: 1 },
    ],
  },
  {
    id: 'acc2',
    summary: 'Colors',
    type: 'color',
    details: [
      {
        id: 'c1',
        label: 'Primary',
        value: 'bg-primary-500',
        counter: 10,
      },
      {
        id: 'c2',
        label: 'Black and gray',
        value: 'bg-[linear-gradient(-45deg,#000_50%,#d1d5db_50%)]',
        counter: 5,
      },
      {
        id: 'c3',
        label: 'Violet',
        value: 'bg-violet-500',
        counter: 0,
      },
      {
        id: 'c4',
        label: 'Red',
        value: 'bg-red-500',
        counter: 2,
      },
      {
        id: 'c5',
        label: 'Yellow',
        value: 'bg-yellow-500',
        counter: 100,
      },
      {
        id: 'c6',
        label: 'Avocado',
        value: 'bg-gradient-to-tr from-yellow-300 to-primary-500',
        counter: 14,
      },
    ],
  },
  {
    id: 'acc3',
    summary: 'Brand',
    type: 'checkbox',
    details: [
      { id: 'b1', label: 'Conroy', value: 'conroy', counter: 10 },
      { id: 'b2', label: 'Goyette', value: 'goyette', counter: 100 },
      { id: 'b3', label: 'Ledner & Ward', value: 'lednerward', counter: 0 },
      { id: 'b4', label: 'Pacocha', value: 'pacocha', counter: 3 },
    ],
  },
  {
    id: 'acc4',
    summary: 'Price',
    type: 'radio',
    details: [
      { id: 'pr1', label: 'Under $24.99', value: 'under', counter: 123 },
      { id: 'pr2', label: '$25.00 - $49.99', value: '25-49', counter: 100 },
      { id: 'pr3', label: '$50.00 - $99.99', value: '50-99', counter: 12 },
      { id: 'pr4', label: '$100.00 - $199.99', value: '100-199', counter: 3 },
      { id: 'pr5', label: '$200.00 and above', value: 'above', counter: 18 },
    ],
  },
];

export default function FiltersPanel() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [opened, setOpened] = useState<string[]>(filtersData.map((item) => item.id));

  const isAccordionItemOpen = (id: string) => opened.includes(id);
  const isFilterSelected = (val: string) => selectedFilters.includes(val);

  const handleFilterSelection = (val: string) => {
    if (selectedFilters.indexOf(val) > -1) {
      setSelectedFilters([...selectedFilters.filter((value) => value !== val)]);
    } else {
      setSelectedFilters([...selectedFilters, val]);
    }
  };

  const handleRadioSelection = (val: string) => {
    const newSelectedFilters = selectedFilters.filter((selectedFilter) => !isFilterSelected(selectedFilter));
    newSelectedFilters.push(val);
    setSelectedFilters(newSelectedFilters);
  };

  const handleToggle = (id: string) => (open: boolean) => {
    if (open) {
      setOpened((current) => [...current, id]);
    } else {
      setOpened((current) => current.filter((item) => item !== id));
    }
  };

  return (
    <aside>
      <div className="flex items-center justify-between">
        <h4 className="px-2 font-bold typography-headline-4">Filters</h4>
        {selectedFilters.length ? (
          <SfButton
            type="reset"
            size="sm"
            variant="tertiary"
            className="hidden md:flex"
            onClick={() => setSelectedFilters([])}
            slotSuffix={<SfIconCancel size="sm" />}
          >
            Clear all
          </SfButton>
        ) : null}
        <button type="button" className="md:hidden text-neutral-500">
          <SfIconClose />
        </button>
      </div>
      <hr className="my-4" />
      <p className="px-2 mb-2 font-medium typography-headline-5">Sort by:</p>
      <div className="px-2">
        <SfSelect aria-label="Sort by">
          {sortOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </SfSelect>
      </div>
      <hr className="my-4" />
      {filtersData.map((section) => (
        <>
          <SfAccordionItem
            key={section.id}
            onToggle={handleToggle(section.id)}
            open={isAccordionItemOpen(section.id)}
            summary={
              <div className="flex justify-between p-2 mb-2">
                <p className="mb-2 font-medium typography-headline-5">{section.summary}</p>
                <SfIconChevronLeft
                  className={classNames(
                    'text-neutral-500',
                    `${isAccordionItemOpen(section.id) ? 'rotate-90' : '-rotate-90'}`,
                  )}
                />
              </div>
            }
          >
            {section.type === 'size' && (
              <ul className="flex flex-wrap gap-4 px-1.5">
                {section.details.map(({ id, label, value, counter }) => (
                  <li>
                    <SfChip
                      key={id}
                      size="sm"
                      inputProps={{
                        value,
                        disabled: !counter,
                        checked: isFilterSelected(value),
                        onChange: (event) => handleFilterSelection(event.target.value),
                      }}
                    >
                      {label}
                    </SfChip>
                  </li>
                ))}
              </ul>
            )}
            {section.type === 'color' &&
              section.details.map(({ id, label, value, counter }) => (
                <SfListItem
                  key={id}
                  as="label"
                  size="sm"
                  className={classNames('px-1.5 bg-transparent hover:bg-transparent', {
                    'font-medium': isFilterSelected(value),
                  })}
                  selected={isFilterSelected(value)}
                  slotPrefix={
                    <>
                      <input
                        value={value}
                        checked={isFilterSelected(value)}
                        className="appearance-none peer"
                        type="checkbox"
                        onChange={(event) => {
                          handleFilterSelection(event.target.value);
                        }}
                      />
                      <span className="inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline">
                        <SfThumbnail size="sm" className={value} />
                      </span>
                    </>
                  }
                >
                  <p>
                    <span className="mr-2 text-sm">{label}</span>
                    <SfCounter size="sm">{counter}</SfCounter>
                  </p>
                </SfListItem>
              ))}
            {section.type === 'checkbox' &&
              section.details.map(({ label, value, counter }) => (
                <SfListItem
                  key={value}
                  as="label"
                  size="sm"
                  disabled={counter === 0}
                  className={classNames('px-1.5 bg-transparent hover:bg-transparent', {
                    'font-medium': isFilterSelected(value),
                  })}
                  slotPrefix={
                    <SfCheckbox
                      disabled={counter === 0}
                      value={value}
                      checked={isFilterSelected(value)}
                      onChange={(event) => {
                        handleFilterSelection(event.target.value);
                      }}
                    />
                  }
                >
                  <p>
                    <span className="mr-2 text-sm">{label}</span>
                    <SfCounter size="sm">{counter}</SfCounter>
                  </p>
                </SfListItem>
              ))}
            {section.type === 'radio' &&
              section.details.map(({ label, value, counter }) => (
                <SfListItem
                  key={value}
                  as="label"
                  size="sm"
                  disabled={counter === 0}
                  className={classNames('px-1.5 bg-transparent hover:bg-transparent', {
                    'font-medium': isFilterSelected(value),
                  })}
                  slotPrefix={
                    <SfRadio
                      disabled={counter === 0}
                      value={value}
                      name="radio-price"
                      checked={isFilterSelected(value)}
                      onChange={(event) => {
                        handleRadioSelection(event.target.value);
                      }}
                    />
                  }
                >
                  <p>
                    <span className="mr-2 text-sm">{label}</span>
                    <SfCounter size="sm">{counter}</SfCounter>
                  </p>
                </SfListItem>
              ))}
          </SfAccordionItem>
          <hr className="my-4" />
        </>
      ))}
      <div className="flex justify-between">
        <SfButton variant="secondary" className="w-full mr-3 md:hidden" onClick={() => setSelectedFilters([])}>
          Clear all filters
        </SfButton>
        <SfButton className="w-full">Show products</SfButton>
      </div>
    </aside>
  );
}

// #endregion source
FiltersPanel.getLayout = ShowcasePageLayout;
