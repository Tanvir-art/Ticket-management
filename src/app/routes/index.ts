import { Router } from "express";
import { userRoute } from "../modules/users/user.route";
import { busRoute } from "../modules/buses/bus.route";
import { ticketAdminRoute } from "../modules/tickets/ticket.route";
import { userBusTicketRoute } from "../modules/users/user.bus.ticket.route";
// import path from "path";
import { userAllBus } from "../modules/users/user.bus.all";

const router = Router();

const moduleRoute = [
  {
    path: "/auth",
    route: userRoute,
  },
  {
    path: "/admin",
    route: busRoute,
  },
  {
    path: "/tickets",
    route: userBusTicketRoute,
  },
  {
    path: "/admin",
    route: ticketAdminRoute,
  },
  {
    path: "/buses",
    route: userAllBus,
  },
];

moduleRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
