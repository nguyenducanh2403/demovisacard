import { FaUser } from 'react-icons/fa';
import { BsFillCreditCardFill } from 'react-icons/bs';
import checkIconMobile from '../../assets/mobile/checkpoint.svg';
import { useSpring, animated } from '@react-spring/web';

function Content() {
    const customer = useSpring({
        from: { customers: 0 },
        to: { customers: 240387 },
    });

    const card = useSpring({
        from: { cards: 0 },
        to: { cards: 12045 },
    });
    return (
        <section className=" md:grid md:grid-cols-2">
            <div className="text-bold md:text-16 ml-[70px] mr-[54px] flex flex-col items-center rounded-[24px] bg-gradient-to-b from-white/40 to-transparent md:col-start-1 ">
                <div className="mt-16 flex items-start gap-8">
                    <FaUser size={'22px'} className="mt-[12px]" />
                    <p className="text-26">
                        <animated.div>{customer.customers.to((val) => Math.floor(val))}</animated.div>
                        <p className="text-13 mb-[36px] font-semibold">Customer</p>
                    </p>
                </div>
                <div className="mb-16 flex items-start gap-8">
                    <BsFillCreditCardFill size={'22px'} className="mt-[12px]" />
                    <p className="text-26">
                        <animated.div>{card.cards.to((val) => Math.floor(val))}</animated.div>
                        <p className="text-13 font-semibold">Card Issue</p>
                    </p>
                </div>
            </div>
            <div className="text-13 md:text-16 mt-[90px] flex w-[100%] flex-col font-semibold md:col-start-2 md:mt-16">
                <div className="check-contents ">
                    <img src={checkIconMobile} alt="Check Icon" />
                    <p>Card report sent to your phone every weeks</p>
                </div>
                <div className="check-contents ">
                    <img src={checkIconMobile} alt="Check Icon" />
                    <p>No fee</p>
                </div>
                <div className="check-contents ">
                    <img src={checkIconMobile} alt="Check Icon" />
                    <p>Set spending limits and restrictions</p>
                </div>
            </div>
        </section>
    );
}

export default Content;
