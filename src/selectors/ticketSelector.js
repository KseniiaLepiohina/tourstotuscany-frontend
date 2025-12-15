import { createSelector } from "@reduxjs/toolkit";
import { fetchMainImg } from "../slices/fetchTours";

const selectImgTour = (state)=> state.fetchAvaliableTours.fetchMainImg;
const selectTitle = (state)=> state.tour;
const selectDate = (state) => state.datepicker.selectedDate;
const selectTime = (state)=> state.datepicker.selectedTime;
const selectPaymentMethod = (state)=> state.tour.payment;
const selectTotalPrice = (state)=> state.tour.totalPrice;
const selectTicketData = (state)=> state.tour.ticketData;

export const selectFullOrder = createSelector(
  [
    selectTicketData,selectTime, selectTitle,selectDate,selectImgTour,selectTotalPrice,selectPaymentMethod
  ],
  (ticketData,totalPrice,payment,selectDate,selectTime,fetchMainImg) => {
    const tour = tour.find((t)=> t.id === tour.id)
    return {
      ...ticketData,
      title:tour.title,
      img:fetchMainImg,
      paymentType:payment.paymentType,
      paymentImg:payment.paymentImg,
    };
  }
)
