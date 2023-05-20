import React from "react";
import styled from "styled-components";
import Button from "./button";



const Cardbox = styled.div`
  background-color: #f8f9fa;
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px;
  border-radius: 5px;
`;

const Cardbody = styled.div`
  height: 28rem;
  margin: 0.9rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.2rem;
  box-shadow: 0.5px 0.5px 2px 0.5px #dadce0;
`;
const Cardimg = styled.div`
  width: 26rem;
  height: 14rem;
  border-top-right-radius: 0.2rem;
  border-top-left-radius: 0.2rem;
  background: url(${(props) => props.imageurl});
  background-position: center;
  background-size: contain;
`;
const Cardtext = styled.div`
  width: 26rem;
  height: 9rem;
  background: white;
`;
const CardMaintext = styled.p`
  font-size: 1rem;
  position: relative;
  margin: 1rem;
  line-height: 1.5rem;
`;
const CardDown = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardTime = styled.p`
  font-size: 0.8rem;
  margin: 0.5rem 1rem;
  color: #6c757d;
`;
const Card = () => {
  return (
    
    <Cardbox>
      <Cardbody>
        <Cardimg imageurl="https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png">
        </Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://i.namu.wiki/i/o81kFfad6uoV0sN0iGSqA3hEKyIniZUhP7VBq2dI3WeyOFalhAEa_lQ_SY0GEbC_oJ4qzLlKokalWFk6cx86vg.webp">
        </Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://i.namu.wiki/i/hWLEwQhnjvdoRZQhrgHMKAZjiSVPO5D86_nBD6OCVLHamm0dM7Ssv2KTfYgjJj-V_X3hMsgV-LeIgI7lmbqzhA.webp">
        </Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://static.miraheze.org/bigforestwiki/d/de/%EC%A2%86%EB%A6%AC.png">
        </Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://i.namu.wiki/i/zfd-NOPP39XJ49BUBLXu8d3SAPsYnpvqYviuQHzSe8FqI6DhYAaHp5Nx30dWi_Q5XGUcbczMfuSp1lOMAN3NvA.webp">
        </Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://i.namu.wiki/i/Cv48b-WvD-d_C4Yt8LpyWygbM368tnEZ0XGbIcZw5ZaQxBlwHHu76LVJZrsMiP5DyEahwXyKkQJAnBHwsS2pyg.webp">
        </Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://i.namu.wiki/i/mB9k1WBSZ2j-HRJVOg_xjlXmeQInjYttK-IzT0U3751T9keQdBMTWA_GpDwUXgqGKWDupWUnfwmWaLtbYzULVA.webp">
        </Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://i.namu.wiki/i/uzKIjeT9hg2tLwPuhA2O3G2fGhx88_enbrmwGv4e5HUNXhCnD7q9fLxYqyMV4Kh1SkWLPljCWzR8QMHP3X-f3w.webp"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
      <Cardbody>
        <Cardimg imageurl="https://i.namu.wiki/i/zi3eTlFvuWvz2h-7U6MPzVrexjI8xKSMJswGmGSEEpDreEoXtcelgRyiZCzYeJ3dfSWYVgv8OcSgWxC26Ulg3w.webp"></Cardimg>
        <Cardtext>
          <CardMaintext>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardMaintext>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </Cardtext>
      </Cardbody>
    </Cardbox>
    
  );
};

export default Card;