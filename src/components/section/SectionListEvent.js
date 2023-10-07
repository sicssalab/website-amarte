import React from "react";
import Pagination from "react-bootstrap/Pagination";
import {
    MystiqueCardBootstrap,
  } from "mystique-web-components";
import breakpointConstants from "../../constants/breakpointConstants";
import { useMediaQuery } from "react-responsive";

const SectionListEvent = (props) => {
    const {title, items} = props;
    const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  console.log(items)
  return (
    <>
      <div>
        <h2>{title}</h2>
        <small className="fw-bold">Tiene: 5345 Resultados</small>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            paddingTop: 15,
            paddingBottom: 30,
            justifyContent: isMobile ? "center" : "initial",
          }}
        >
          {items.map((item, i) => {
            return (
              <MystiqueCardBootstrap
                key={i}
                href={`/${item.slug}`}
                srcImage={
                  "https://media-api.xogrp.com/images/e913da1b-9675-4dd0-bbc8-bbc0bee1e907~sc_300.250"
                }
                alt={item.name}
                name={item.name}
                tag="Quintana Roo"
                variant="outline-primary"
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
                sendPriceText={"Solicitar Precios"}
                //iconObject={"objeto"}
              />
            );
          })}
        </div>
      </div>
      <div className="">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default SectionListEvent;
