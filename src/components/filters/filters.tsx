import React, { ChangeEvent } from "react";
import * as Styled from "./filters.styled";
import { DropDown } from "../dropdown";
import { Checkbox } from "../checkbox";
import { useQueryParams } from "@/hooks/useQueryParams";
import useTranslation from "next-translate/useTranslation";
import {
  DROPDOWN_LABELS,
  FILTER_ITEMS,
  FILTER_LABELS,
  QUERY_PARAMS,
} from "@/constants/global";

export const Filters = () => {
  const { t } = useTranslation();
  const { queryParam, setQuery } = useQueryParams();
  const genre = queryParam.get(QUERY_PARAMS.GENRE);
  const sort = queryParam.get(QUERY_PARAMS.SORT);

  const handleFilters = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    setQuery(key, event.target.value);
  };

  return (
    <Styled.ContentWrapper>
      <DropDown label={t(DROPDOWN_LABELS.GENRE)}>
        <Styled.DropDownContent>
          <Styled.DropDownItems>
            <Checkbox
              data-testid={FILTER_LABELS.DRAMA}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFilters(event, QUERY_PARAMS.GENRE)
              }
              value={FILTER_ITEMS.DRAMA}
              checked={genre === FILTER_ITEMS.DRAMA}
              label={t(FILTER_LABELS.DRAMA)}
            />
            <Checkbox
              data-testid={FILTER_LABELS.SCIENCE_FICTION}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFilters(event, QUERY_PARAMS.GENRE)
              }
              value={FILTER_ITEMS.SCIENCE_FICTION}
              checked={genre === FILTER_ITEMS.SCIENCE_FICTION}
              label={t(FILTER_LABELS.SCIENCE_FICTION)}
            />
          </Styled.DropDownItems>
          <Styled.DropDownItems>
            <Checkbox
              data-testid={FILTER_LABELS.COMEDY}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFilters(event, QUERY_PARAMS.GENRE)
              }
              value={FILTER_ITEMS.COMEDY}
              checked={genre === FILTER_ITEMS.COMEDY}
              label={t(FILTER_LABELS.COMEDY)}
            />
            <Checkbox
              data-testid={FILTER_LABELS.ACTION}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleFilters(event, QUERY_PARAMS.GENRE)
              }
              value={FILTER_ITEMS.ACTION}
              checked={genre === FILTER_ITEMS.ACTION}
              label={t(FILTER_LABELS.ACTION)}
            />
          </Styled.DropDownItems>
        </Styled.DropDownContent>
      </DropDown>

      <DropDown label={t(DROPDOWN_LABELS.RATE_OF_MOVIES)}>
        <Styled.DropDownItems>
          <Checkbox
            data-testid={FILTER_LABELS.HIGHEST_RATE}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleFilters(event, QUERY_PARAMS.SORT)
            }
            value={FILTER_ITEMS.HIGHEST_RATE}
            checked={sort === FILTER_ITEMS.HIGHEST_RATE}
            label={t(FILTER_LABELS.HIGHEST_RATE)}
          />
          <Checkbox
            data-testid={FILTER_LABELS.LOWEST_RATE}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleFilters(event, QUERY_PARAMS.SORT)
            }
            value={FILTER_ITEMS.LOWEST_RATE}
            checked={sort === FILTER_ITEMS.LOWEST_RATE}
            label={t(FILTER_LABELS.LOWEST_RATE)}
          />
        </Styled.DropDownItems>
      </DropDown>
    </Styled.ContentWrapper>
  );
};
