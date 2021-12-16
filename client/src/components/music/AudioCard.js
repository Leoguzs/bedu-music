import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';



function AudioCards(props) {
    return (
        <div className="grid-cards" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px"}}>
            {//console.log(props.albums)}
            }
            {props.albums.map((album, index) => (
                <Card sx={{ cursor: "pointer", maxWidth: 345, borderRadius: 1, margin:3}} key={index}>
                   <CardMedia
                        component="img"
                        height={album.images[1].height}
                        image={album.images[1].url}
                        alt={album.name}
                        onClick={(e) => props.updatePlaylist(e, props.albums[index])}
                        variant="contained" 
                    />
                </Card>
            ))
            };
        </div >
    );

}

export default AudioCards;