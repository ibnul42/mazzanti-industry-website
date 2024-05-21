import React from 'react'
import parse, { domToReact } from 'html-react-parser'

const RenderText = ({ htmlContent }) => {
    const options = {
        replace: (node) => {
            if (node.name === 'ul') {
                return <ul className="list-disc ml-10 py-1">{domToReact(node.children)}</ul>;
            }
            if (node.name === 'ol') {
                return <ol className="list-decimal ml-10 py-1">{domToReact(node.children)}</ol>;
            }
            if (node.name === 'li') {
                return <ol className="list-decimal ml-10">{domToReact(node.children)}</ol>;
            }
            if (node.name === 'strong') {
                return <strong className="font-bold">{domToReact(node.children)}</strong>;
            }
            if (node.name === 'em') {
                return <em className="italic">{domToReact(node.children)}</em>;
            }
            if (node.name === 'u') {
                return <u className="underline">{domToReact(node.children)}</u>;
            }
            // Add more conditions for other HTML elements as needed
        },
    };

    return parse(htmlContent, options);
}

export default RenderText