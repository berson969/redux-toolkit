import React from 'react';
import {Button} from "react-bootstrap";
import {useAppDispatch} from "../hooks";
import {removeFromFavorite} from "../slices/MoviesSlice.ts";

const ButtonX: React.FC< { id: string} > = ({id}) => {
	const dispatch = useAppDispatch();
    const handleRemove = (id: string) => {
        dispatch(removeFromFavorite(id))
    };

    return (
        <Button onClick={() =>  handleRemove(id)} className="m-1 border-0 rounded-circle bg-transparent link-offset-3-hover">
            <i className="bi bi-x-lg"></i>
        </Button>
    );
};

export default ButtonX;
