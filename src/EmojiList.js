import React, { useState } from 'react';

function EmojiList() {
    const [emojis, setEmojis] = useState([
        { id: 1, symbol: '😀', count: 0 },
        { id: 2, symbol: '😍', count: 0 },
        { id: 3, symbol: '😎', count: 0 },
    ]);
    const [winner, setWinner] = useState(null);

    const handleEmojiClick = (id) => {
        const updatedEmojis = emojis.map((emoji) =>
            emoji.id === id ? { ...emoji, count: emoji.count + 1 } : emoji
        );
        setEmojis(updatedEmojis);
    };

    const showResults = () => {
        const maxCount = Math.max(...emojis.map((emoji) => emoji.count));
        const winningEmoji = emojis.find((emoji) => emoji.count === maxCount);
        setWinner(winningEmoji);
    };

    return (
        <div>
            <h1>Emoji Voting App</h1>
            <ul>
                {emojis.map((emoji) => (
                    <li key={emoji.id} onClick={() => handleEmojiClick(emoji.id)}>
                        {emoji.symbol} - {emoji.count}
                    </li>
                ))}
            </ul>
            <button onClick={showResults}>Show Results</button>
            {winner && (
                <div>
                    <h2>Winner:</h2>
                    <p>{winner.symbol}</p>
                </div>
            )}
        </div>
    );
}

export default EmojiList;
