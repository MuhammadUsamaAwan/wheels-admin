import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getManufacturer } from "../../redux/actions/manufacturer";
import { useParams } from "react-router-dom";
import LoadingIcon from "../UI/LoadingIcon";

const EditManufacturer = () => {
  const dispatch = useDispatch();
  const manufacturer = useSelector(state => state.manufacturer);
  const token = useSelector(state => state.auth.token);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getManufacturer(token, id));
  }, [dispatch, token]);
  if (manufacturer.isLoading) return <LoadingIcon />;
  return <div>hell</div>;
};

export default EditManufacturer;
