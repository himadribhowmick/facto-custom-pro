import React from "react";
import as from "../assets/icon/as.png";
import u1 from "../assets/.jpg";
import Img1 from "~/assets/icon/img-1.jpg";
import Img2 from "~/assets/icon/img-2.jpg";
import Img3 from "~/assets/icon/img-3.jpg";
import Img4 from "~/assets/icon/img-4.jpg";
import Img5 from "~/assets/icon/img-5.jpg";
import cashIcon from "../assets/cash.svg";
import feeIcon from "../assets/hidden.svg";
import posIcon from "../assets/pos.svg";
import secureIcon from "../assets/secure.svg";
import total from "../assets/icon/icon info.svg";
import trending from "../assets/icon/sales.svg";

const different: React.FC = () => {
  // Chart data
  const barChartData = [
    { day: "Sun", value: 70, color: "bg-[#E0F0E5]" },
    { day: "Mon", value: 60, color: "bg-[#E0F0E5]" },
    { day: "Tue", value: 90, color: "bg-[#E0F0E5]" },
    { day: "Wed", value: 70, color: "bg-[#E0F0E5]" },
    { day: "Thu", value: 130, color: "bg-[#0F4E23]" }, // highest
    { day: "Fri", value: 60, color: "bg-[#DAFFC2]" },
    { day: "Sat", value: 90, color: "bg-[#E0F0E5]" },
  ];

  const users = [Img1, Img2, Img3, Img4, Img5];

  const features = [
    { icon: cashIcon, text: "Instant Cash, No Waiting" },
    { icon: feeIcon, text: "No Hidden Fees, No Surprises" },
    { icon: posIcon, text: "Seamless POS & Payment Processor" },
    { icon: secureIcon, text: "Secure & Compliant Transactions" },
  ];

  return (
    <section className="">
      <div className="container container-pad mx-auto">
        <div className="h-full max-h-[1197px] min-h-[1197px] flex flex-col align-middle items-center justify-center">
          <div className="flex flex-col align-middle items-center justify-center gap-[32px] w-[822px] 2xl:max-w-[822px] 2xl:min-w-[822px] h-[301px] text-center">
            <span className="flex text-center justify-center align-middle gap-[8px] w-[227px] h-[42px] rotate-0 opacity-100 pt-[8px] pr-[24px] pb-[8px] pl-[24px] rounded-full bg-[#DFEDE3]">
              Why casa different
            </span>
            <h2 className="w-auto 2xl:max-w-[612px] h-[123px] rotate-0 opacity-100 top-[74px] left-[105px] font-[Roboto] font-[800] text-[56px] 2xl:text-[56px] leading-[68px] tracking-normal text-center align-middle text-[#141414]">
              Why CASA Stands Out from the Rest
            </h2>
            <p className="max-w-[822px] 2xl:max-w-[822px] h-[72px] opacity-100 font-[Manrope] font-normal text-[24px] leading-[36px] tracking-normal text-center align-middle text-[#686868]">
              Empowering businesses with faster cash access, CASA provides a
              secure, fast, and flexible solution to get early payments for
              credit card sales.
            </p>
          </div>

          {/* Main Card */}
          <div className="flex gap-[36px] max-w-[1440px] 2xl:w-[1440px] h-[766px] rotate-0 opacity-100 pt-[80px] pr-[32px] pb-[80px] pl-[32px] rounded-[25px] bg-[#F8F8F8]">
            {/* Left Section */}
            <div className="max-w-[764px] 2xl:max-w-[764px] h-[598px] rotate-0 opacity-100 rounded-[25px]">
              {/* Floating Receive Card */}
              <div className="flex gap-[8px] w-[552px] h-[598px] rotate-0 opacity-100 top-[84px] left-[32px] pt-[41px] pr-[32px] pb-[41px] pl-[32px] rounded-[25px] bg-[#E0F0E5]">
              <div className="flex flex-col w-[400px] h-[505px] gap-[36px]">
              <div className="flex gap-[24px] w-[357px] h-[108px] rotate-0 opacity-100 p-[24px] rounded-[25px] bg-white">
                <div className="w-[48px] h-[48px] pt-[30px] pl-[24px]  flex items-center justify-center rounded-full bg-yellow-200">
                  <img src={as} alt="Receive card" className="w-[17.5px] h-[21.5px] pt-[1.25px] pl-[3.25px] background: text-141414 " />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    Receive Money from card
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Cash Deposited Within 24 Hours
                  </p>
                </div>
              </div>

              {/* Chart Card */}

              <div className="w-[400px] h-[361px] opacity-100 rounded-[24px] bg-[#FFFFFF] flex align-middle">
                <div className="flex gap-4 items-center  w-[308px] h-[40px] opacity-100 absolute top-[32px] left-[32.5px] ">
                  <img
                    src={total}
                    alt="total sales"
                    className="w-[32px] h-[32px]"
                  />
                  <span className="w-[260px] h-[40px] opacity-100 flex gap-2">
                    <span className="w-[133px] h-[22px] opacity-100 font-manrope font-medium text-[24px] leading-[36px] align-middle text-[#686868]">
                      Total sales:
                    </span>
                    <span className="w-[119px] h-[40px] opacity-100 font-roboto font-bold text-[32px] leading-[40px] align-middle text-[#686868]">
                      $12,500
                    </span>
                  </span>
                </div>

                {/* Bar Chart */}
                <div className="absolute left-[33px] top-[102px] flex justify-between  items-end gap-[8px] w-[334px] h-[232px] opacity-100 ">
                  {barChartData.map(({ day, value, color }) => {
                    const isHighest =
                      value === Math.max(...barChartData.map((d) => d.value));
                    return (
                      <div
                        key={day}
                        className="flex flex-col items-center justify-end relative w-[28px]"
                      >
                        {isHighest && (
                          <div
                            className="absolute bg-[#F1F68E] rounded-[12px] shadow-md flex flex-col items-center justify-center text-[#141414] font-[roboto] font-medium"
                            style={{
                              width: "135px",
                              height: "87px",
                              top: "-70px",
                              left: "-54px",
                            }}
                          >
                            <p className="text-[14px] font-normal leading-[20px]">
                              Highest sale
                            </p>

                            <div className=" flex items-center w-[103px] h-[34px] gap-2">
                              <img
                                src={trending}
                                alt="total sales"
                                className="w-[10px] h-[10px] top-[10px] left-[5px] opacity-100"
                              />
                              <p className="text-[20px] font-bold leading-[28px] mt-[4px]">
                                $2,450
                              </p>
                            </div>
                          </div>
                        )}
                        
                        <div
                          className={`rounded-t-[4px] ${color} w-full`}
                          style={{ height: `${value}px` }}
                        ></div>
                        <span className="text-[12px] mt-[6px] text-[#666]">
                          {day}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              </div>
              </div>
              {/* Top User Card */}
              <div className="absolute bottom-4 right-6 bg-white rounded-2xl p-4 shadow-md w-56 text-left">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Top User
                </p>
                <div className="flex -space-x-2 mb-3">
                  {users.map((user, idx) => (
                    <img
                      key={idx}
                      src={user}
                      alt={`User ${idx + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  <p>Enter Amount</p>
                  <p className="font-semibold text-gray-900">$50,000</p>
                  <p>Discount rate : 10%</p>
                </div>
                <button className="mt-2 w-full bg-green-100 text-green-800 text-xs font-semibold py-1.5 rounded-md hover:bg-green-200 transition">
                  See detail
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center w-[576px] 2xl:max-w-[576px] h-[606px] ">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                CASA offers instant, flexible funding from card transactions.
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                CASA stands out by offering fast, flexible, and transparent
                funding for business owners who need immediate cash flow from
                credit card transactions. Here’s what makes us unique
              </p>

              <ul className="space-y-4 mb-8">
                {features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <img src={f.icon} alt={f.text} className="w-6 h-6" />
                    <span className="text-gray-800 text-sm">{f.text}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-green-800 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition">
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default different;
