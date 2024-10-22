import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {

    beforeEach(() => {

        console.log("RUNNING BEFORE EACH TEST")
    })

    afterEach(() => {
        console.log("RUNNING AFTER EACH TEST")
    })

    it('should render follower items', async () => {
      render(<MockFollowersList />);
      const followerDivElement = await screen.findByTestId("follower-item-0");
      //screen.debug();
      expect(followerDivElement).toBeInTheDocument();
    });

    it('should render multiple follower items', async () => {
        render(<MockFollowersList />);
        const followerDivElements = await screen.findAllByTestId(/follower-item/i);
        expect(followerDivElements.length).toBe(1);
    });
})