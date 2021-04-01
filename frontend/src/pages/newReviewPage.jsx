import React, { useState } from 'react';

import Footer from '../components/footer';
import HeaderNavi from '../components/headerNavi';

import RestaurantTitle from '../components/restaurantPageComponents/bannerTitle';
import { RestaurantInfoBanner } from '../styles/pageStyles/restaurantStyles';
import {
    BtnReview,
    InputReviewField,
    MainContainer,
    P,
    RatingField,
    ReviewBanner
} from "../styles/pageStyles/newReviewStyles";
import {FaStar} from "react-icons/all";
import newReviewFetch from "../store/fetches/review_fetches";
import { useSelector } from 'react-redux';






const ReviewPage = () => {
    const restaurant_data = useSelector(state => state.restaurantsReducer.restaurant_data);


    // const [rating1, serRating1] = useState('');
    const [reviewInput, setReviewInput] = useState('');

    // const ratingInput = (ratingButton) => {
    //     if (ratingButton === rating1){
    //         return '1'
    //     }else if (ratingButton === rating2){
    //         return '2'
    //     }else if (ratingButton === rating3){
    //         return '3'
    //     }else{
    //         return '0'
    //     }};


    // const setReviewInput = (e) => {
    //     console.log(reviewInput)
    // };
// const onChangeReview = e =>{
//     console.log(reviewInput)
//     setReviewInput(e.target.value);
// }

        const submitReviewAndRating = () => {

        newReviewFetch(reviewInput)
        .then(data => {
            console.log(data);

    });
    };

    //     const submitReviewAndRating = () => {
    //
    //     newReviewFetch(reviewInput)
    //     .then(data => {
    //         console.log(data);
    //
    // });
    // };

    return(
        <>
            <HeaderNavi/> 
            <ReviewBanner>
            <RestaurantInfoBanner>
                    <RestaurantTitle restaurant_data={restaurant_data}/>
                </RestaurantInfoBanner>
            </ReviewBanner>
            <MainContainer>
            <RatingField>
                {/*<button onClick={saveRating1}><FaStar /></button>*/}
                                {/*<button onClick={saveRating2}><FaStar /></button>*/}
                {/*<button onClick={saveRating3}><FaStar /></button>*/}
                <button><FaStar /></button>
                <button><FaStar /></button>
                <button><FaStar /></button>
                <button><FaStar /></button>
            <h5>Select your rating</h5>
            </RatingField>
            <InputReviewField>
                <p>Your review helps others learn about great local businesses.</p>
                <p style={{color:"white"}}>.</p>
                <p>Please don't review this business if you received a freebie for writing this review, <br />or if you're connected in any way to the owner or employees.</p>

                <input
                    value={reviewInput}
                    onChange= {e => setReviewInput(e.target.value)}
                    // onChange={e => onChangeReview(e)}
                    type='text'
                    required/>

                </InputReviewField>
                {/*<BtnReview>SUBMIT</BtnReview>*/}
                {/*<BtnReview onClick={submitReview}>SUBMIT</BtnReview>*/}
                <BtnReview onClick={submitReviewAndRating}>SUBMIT</BtnReview>
                {/* onClick to do for Submit btn! if condition if inpout fulfiled or not maybe make display this field is required only when submitting empty field  */}
                <P>This field is required *to be displayed when clicking button with empty input field</P>
            </MainContainer>
                
            <Footer />
        </>
    );
};
export default ReviewPage;


